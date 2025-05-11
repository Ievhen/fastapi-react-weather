function SidebarItem({ data, onItemClick }) {
    return (
        <div
            className="list-group-item list-group-item-action py-3 lh-sm"
            role="button"
            onClick={() => onItemClick(data)}
        >
            <div className="d-flex w-100 align-items-center justify-content-between">
                <strong className="mb-1">{data.name}</strong>
                <small className="text-body-secondary">{data.alpha_code}</small>
            </div>
            <div className="col-10 mb-1 small">{data.capital}</div>
        </div>
    );
}

export default SidebarItem;