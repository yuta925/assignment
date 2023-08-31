import Link from "next/link";

interface TabComponent {
    tabName: string;
    tabID: string;
    backgroundColor?: string; 
}

const Tab: React.FC<TabComponent> = ({ tabName, tabID, backgroundColor }) => {
    const defaultBackgroundColor = "bg-gray-900";
    const bgColorClass = backgroundColor ? backgroundColor : defaultBackgroundColor;

    return (
      <Link href={tabID} className={`border p-1 rounded text-white ${bgColorClass} hover:bg-gray-300`}>
        {tabName || "Tab"}   
      </Link>
    );
};

export default Tab;
