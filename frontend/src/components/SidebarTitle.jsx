import React from "react";

class SidebarTitle extends React.Component {
    render() {
        const { title } = this.props;
        return (
            <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
                <svg className="bi pe-none me-2" width="30" height="24" aria-hidden="true"></svg>
                <span className="fs-5 fw-semibold">{title}</span>
            </a>
        )
    }
}

export default SidebarTitle