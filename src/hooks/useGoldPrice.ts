"use client";

import { useState, useEffect, useCallback } from "react";

interface PriceData {
  goldPerOz: number;
  btcPrice: number;
  timestamp: number;
}

interface UseGoldPriceReturn {
  goldPerOz: number;
  btcPrice: number;
  lastUpdated: string;
  isLive: boolean;
}

// Fallback prices (updated periodically as a safety net)
const FALLBACK_GOLD = 2950;
const FALLBACK_BTC = 88000;

export function useGoldPrice(): UseGoldPriceReturn {
  const [prices, setPrices] = useState<PriceData>({
    goldPerOz: FALLBACK_GOLD,
    btcPrice: FALLBACK_BTC,
    timestamp: Date.now(),
  });
  const [isLive, setIsLive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");

  const fetchPrices = useCallback(async () => {
    try {
      const res = await fetch("/api/prices");
      if (!res.ok) return;
      const data: PriceData = await res.json();

      // Only update if we got real prices
      if (data.goldPerOz > 0 && data.btcPrice > 0) {
        setPrices(data);
        setIsLive(true);
      }
    } catch {
      // Keep existing prices on error
    }

    setLastUpdated(
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );
  }, []);

  useEffect(() => {
    // Fetch immediately on mount
    fetchPrices();

    // Then every 60 seconds
    const id = setInterval(fetchPrices, 60_000);
    return () => clearInterval(id);
  }, [fetchPrices]);

  return {
    goldPerOz: prices.goldPerOz,
    btcPrice: prices.btcPrice,
    lastUpdated,
    isLive,
  };
}
