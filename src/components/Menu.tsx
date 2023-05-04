import Card from "./Card";

interface Props {
    list: String[];
}

function Menu({list}: Props) {
    return (
        <>
        <div className="md:flex mt-10 ml-2">
            <Card product={list[0]} price={list[1]} />
            <Card product={list[2]} price={list[3]} />
        </div>
        </>
    )
}

export default Menu