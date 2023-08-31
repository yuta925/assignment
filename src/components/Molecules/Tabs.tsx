import Tab from "../Atoms/Tab"

const Tabs = () => {
    return (
        <div className="tabs mt-4 flex justify-between md:justify-start">
            <Tab tabName="Tops" tabID="/"/>
            <Tab tabName="Business" tabID="business"/>
            <Tab tabName="Technology" tabID="technology"/>
            <Tab tabName="Entertainment" tabID="entertainment"/>
            <Tab tabName="Sports" tabID="sports"/>
        </div>
    )
}

export default Tabs