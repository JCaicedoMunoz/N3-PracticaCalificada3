import { useEffect, useState } from "react";
import Bill from "./components/Bill/Bill";
import Header from "./components/Header/Header";
import PeopleInput from "./components/PeopleInput/PeopleInput";
import ResetButton from "./components/ResetButton/ResetButton";
import Result from "./components/Result/Result";
import TipOptions from "./components/TipOptions/TipOptions";


const initial_values = {
  bill: 0,
  tip: 0,
  people: 1,
};

const tip_values = [5, 10, 15, 25, 50];

export default function App() {
  const [data, setData] = useState(initial_values);
  const [totals, setTotals] = useState({ total_tip: 0, total_amount: 0 });

  const handleTipChange = (tip) => {
    setData({ ...data, tip });
  };

  const handleBillChange = (bill) => {
    setData({ ...data, bill });
  };

  const handlePeopleChange = (people) => {
    setData({ ...data, people });
  };

  const reset = () => {
    setData(initial_values);
    setTotals({ total_tip: 0, total_amount: 0 });
  };

  useEffect(() => {
    const { bill, tip, people } = data;
    if (bill > 0 && tip > 0 && people > 0) {
      const total_amount = (bill * (tip / 100) + bill) / people;
      const total_tip = (bill * (tip / 100)) / people;
      setTotals({ total_tip: total_tip, total_amount: total_amount });
    }
  }, [data]);

  return (
    <div>
      <Header />
      <div className="general-wrapper">
        <div className="data-wrapper">
          <Bill value={data.bill} onChange={handleBillChange} />
          <TipOptions
            values={tip_values}
            selectedTip={data.tip}
            onChange={handleTipChange}
          />
          <PeopleInput value={data.people} onChange={handlePeopleChange} />
        </div>
        <Result totalTip={totals.total_tip} totalAmount={totals.total_amount} />
        <ResetButton onClick={reset} />
      </div>
    </div>
  );
}
