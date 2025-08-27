import Header from "./components/Header";
import { useState } from 'react';
import Products from "./pages/Products";
import { Route, Routes, useNavigate } from "react-router";
import Home from "./pages/Home";
import { Button, Radio, RadioGroup } from "@headlessui/react";
import ProductDetails from "./pages/ProductDetails";
import { FILTERS } from "./types/product";
import { useAuth } from "./hooks/useAuth";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
    const [filter, setFilter] = useState<string | null>(null)

    const navigate = useNavigate()

    const {
        userData,   
    } = useAuth()

    return (
        <>
            <Sidebar />
            <div className="flex flex-col w-full h-full min-h-screen bg-neutral-100 text-neutral-800">
                <Header setFilter={setFilter} userData={userData} />
                <div className="bg-neutral-50 border-t border-b border-neutral-200 h-10 hidden md:block">
                    <RadioGroup value={filter} onChange={setFilter} className="h-full flex justify-between md:px-20 xl:px-50">
                        {FILTERS.map((filter) => (
                            <Radio key={filter.id} value={filter.id} className="group">
                                <Button
                                    className="xl:w-33 group-data-checked:font-bold group-data-checked:border-b-2 border-b-orange-500 hover:cursor-pointer h-full px-2"
                                    onClick={() => navigate(`/products`)}
                                >{filter.name}</Button>
                            </Radio>
                        ))}
                    </RadioGroup>
                </div>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products filter={filter} />} />
                    <Route path="products/:productId" element={<ProductDetails />}/>
                </Routes>
            </div>
        </>
    )
}

export default App