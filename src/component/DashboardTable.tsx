import { Column } from "react-table";
import TableHOC from "./TableHOC";


interface Datatype {
    id: string,
    quantity: number,
    discount: number,
    amount: number,
    status: string;
}

const columns: Column<Datatype>[] = [{
    Header: "Id",
    accessor: "id",
},
{
    Header: "Quantity",
    accessor: "quantity",
},
{
    Header: "Discount",
    accessor: "discount",
},
{
    Header: "Amount",
    accessor: "amount",
},
{
    Header: "Status",
    accessor: "status",
},
];


const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
    return TableHOC<DataType>(
      columns,
      data,
      "transaction-box",
      "Top Transaction"
    )();
  };
  
  export default DashboardTable;