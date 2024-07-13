"use client";

import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from "next/navigation";
import { FungibleToken } from "@/app/types";

interface TokenRowProps {
  token: FungibleToken;
}

const TokenRow: React.FC<TokenRowProps> = ({ token }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(`/token/${token.id}?${params}`);
  };

  return (
    <div onClick={handleClick} className="token-row">
      <h3>{token.name}</h3>
      <p>{token.symbol}</p>
      <p>{token.balance}</p>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TokenRow), { ssr: false });
