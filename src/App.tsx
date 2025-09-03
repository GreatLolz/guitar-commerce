import Header from "./components/Header";
import { useState } from 'react';
import Products from "./pages/Products";
import { Route, Routes, useNavigate } from "react-router";
import Home from "./pages/Home";
import { Button, Radio, RadioGroup } from "@headlessui/react";
import ProductDetails from "./pages/ProductDetails";
import { CATEGORIES } from "./types/product";
import { useAuth } from "./hooks/useAuth";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
    const [category, setCategory] = useState<string | null>(null)

    const navigate = useNavigate()

    const {
        userData,   
    } = useAuth()

    return (
        <>
            <Sidebar />
            <div className="flex flex-col w-full h-full min-h-screen bg-neutral-100 text-neutral-800">
                <Header setCategory={setCategory} userData={userData} />
                <div className="bg-neutral-50 border-t border-b border-neutral-200 h-10 hidden md:block">
                    <RadioGroup value={category} onChange={setCategory} className="h-full flex justify-between md:px-20 xl:px-50">
                        {CATEGORIES.map((category) => (
                            <Radio key={category.id} value={category.id} className="group">
                                <Button
                                    className="xl:w-33 group-data-checked:font-bold group-data-checked:border-b-2 border-b-orange-500 hover:cursor-pointer h-full px-2"
                                    onClick={() => navigate(`/products`)}
                                >{category.name}</Button>
                            </Radio>
                        ))}
                    </RadioGroup>
                </div>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products category={category} />} />
                    <Route path="products/:productId" element={<ProductDetails />}/>
                </Routes>
            </div>
        </>
    )
}

export default App