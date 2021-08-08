import React, {useState} from 'react'
import data from '../data'
import Categories from './Categories'
import Menu from './Menu'

const allCategories = ['all', ...new Set(data.map(item => item.category))]

const Index = () => {
    const [menuItems, setMenuItems] = useState(data)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = category => {
        if (category === 'all') {
            setMenuItems(data)
            return;
        }
        const newItems = data.filter(item => item.category === category)
        setMenuItems(newItems)
    }


    return (
        <div className='main'>
            <section className="menu-section">
                <div className="title">
                    <h2>Menu</h2>
                    <div className="underline"></div>
                </div>
            </section>
            <Categories categories={categories} filterItems={filterItems}/>
            <Menu items={menuItems}/>
            
        </div>
    )
}

export default Index
