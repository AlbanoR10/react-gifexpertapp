import React,{useState} from 'react'
import {AddCategory} from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GitExpertApp = () => {
    // const categories = ['One Punch', "Samurai X", "Dragon Ball"];
    const [categories, setCategories] = useState(['One Punch']);

    const handleAdd = () => {
        setCategories([...categories, "Spiderman"])
        setCategories((cate)=>[...cate, "batman"])
    }
    return (
        <>
            <h2>GitExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map(category => 
                    <GifGrid 
                        category={category}
                        key={category}/>)
                }
            </ol>
        </>
    )
}

export default GitExpertApp;