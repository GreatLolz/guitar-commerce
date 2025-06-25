import Product from "../components/products/Product";

export default function Products() {
    return (
        <div className="grid grid-cols-4 gap-2 mx-auto py-10">
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}