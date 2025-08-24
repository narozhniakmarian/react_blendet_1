type Currency = "USD" | "EUR" | "UAH";

type ConvertParams = {
  amount: number;
  currency: Currency;
};

function convertCurrency({ amount, currency }: ConvertParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}
convertCurrency({ amount: 250, currency: "EUR" });
