import ProductTile from "../components/products/ProductTile";

const products = [
    {
        imageUrl: "https://picsum.photos/128",
        name: "Epiphone Les Paul Custom Widow Electric Guitar Indigo Burst",
        price: 799.00,
        rating: 4,
        reviewCount: 25
    },
    {
        imageUrl: "https://picsum.photos/128",
        name: "Jackson Dinky JS22 DKA Arch Top Electric Guitar Satin Black",
        price: 249.99,
        rating: 5,
        reviewCount: 88
    },
    {
        imageUrl: "https://picsum.photos/128",
        name: "Squier Sonic Stratocaster HSS Maple Fingerboard Electric Guitar Black",
        price: 230.99,
        rating: 4,
        reviewCount: 12
    },
    {
        imageUrl: "https://picsum.photos/128",
        name: "Squier Classic Vibe '50s Stratocaster Electric Guitar Shell Pink",
        price: 449.99,
        rating: 3,
        reviewCount: 5
    }
]

export default function Products() {
    return (
        <div className="grid grid-cols-4 gap-2 mx-auto py-10">
            {products.map((product, index) => (
                <ProductTile key={index} imageUrl={product.imageUrl} name={product.name} price={product.price} rating={product.rating} reviewCount={product.reviewCount}/>
            ))}
        </div>
    )
}