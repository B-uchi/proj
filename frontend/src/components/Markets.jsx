import { TickerTape } from "react-ts-tradingview-widgets";

const Markets = () => {
  const symbols = [
    {
      proName: "FOREXCOM:SPXUSD",
      title: "S&P 500",
    },
    {
      proName: "FOREXCOM:NSXUSD",
      title: "US 100",
    },
    {
      proName: "FX_IDC:EURUSD",
      title: "EUR to USD",
    },
    {
      proName: "BITSTAMP:BTCUSD",
      title: "Bitcoin",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "Ethereum",
    },
    {
      description: "Apple",
      proName: "NASDAQ:AAPL",
    },
    {
      description: "Alphabet",
      proName: "NASDAQ:GOOGL",
    },
  ];
  return (
    <div className="md:w-[80%] mx-auto mt-3">
      <TickerTape symbols={symbols} displayMode="regular" locale="en" />
    </div>
  );
};
export default Markets;
