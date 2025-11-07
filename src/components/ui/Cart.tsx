import headPhone1 from "@/app/assets/mobileHeadPhone2.png";
import Typography from "../common/Typography";
import { Button } from "../common/Button";
export default function CartUI() {
  const carts = [
    {
      img: headPhone1,
      title: "headPhone1",
      price: 89,
      quantity: 3,
    },
    {
      img: headPhone1,
      title: "headPhone1",
      price: 89,
      quantity: 3,
    },
    {
      img: headPhone1,
      title: "headPhone1",
      price: 89,
      quantity: 3,
    },
  ];
  return (
    <div className="absolute top-full z-99 h-screen w-full bg-black/40 flex justify-center ">
      <div className="relative md:w-9/10 max-w-[1109.83px] min-[2880px]:w-[1440px] top-5 flex justify-end">
        <div className="w-[377px] h-[488px] bg-white relative rounded-lg top-5 p-7 flex flex-col gap-7">
            <div className="w-full flex justify-between items-center">
                <Typography variant="h5">Cart({carts.length})</Typography>
                <button className="bg-(--hash)!">
                <Typography variant="body"  className="text-(--hash)!"> Remove all</Typography>       
                </button>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  );
}
