import useSWR from "swr";
const URL = "http://localhost:8000/order";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export const Amountpaid = () => {
  const birthDay = new Date();
  const today: number = birthDay.getDate();
  const { data, error, isLoading } = useSWR(URL, fetcher);

  let price = 0;
  const income = data?.getAllOrder.filter((e: any) => {
    return e.createdAt.slice(8, 10) == today;
  });
  income?.map((e: any) => {
    return (price = price + e.amountPaid);
  });

  return (
    <div className="h-[170px] bg-white rounded-[10px] p-5 flex flex-col justify-between w-1/3">
      <p className="font-bold text-xl">Орлого</p>
      <p className="text-[44px] font-bold">
        {price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
      </p>
      <p className="text-[18px]">Өнөөдөр</p>
    </div>
  );
};
