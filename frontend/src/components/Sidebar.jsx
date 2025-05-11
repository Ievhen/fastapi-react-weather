import React from "react";
import SidebarTitle from "./SidebarTitle";
import SidebarItem from "./SidebarItem";

class Sidebar extends React.Component {
    render() {
        const { title, items, onItemClick } = this.props;

        return (
            <div className="sidebar flex-shrink-0">
                <SidebarTitle title={title} />
                <div className="sidebar-items list-group list-group-flush border-bottom scrollarea">
                    {items.map((item) => (
                        <SidebarItem
                            key={item.alpha_code} 
                            data={item} 
                            onItemClick={(item) => onItemClick(item)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Sidebar