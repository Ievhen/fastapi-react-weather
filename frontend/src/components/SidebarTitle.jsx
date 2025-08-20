import React from "react";

class SidebarTitle extends React.Component {
    render() {
        const { title } = this.props;
        return (
            <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
                <i className="bi bi-cloud-sun me-2 fs-5"></i>
                <span className="fs-5 fw-semibold">{title}</span>
            </a>
        )
    }
}

export default SidebarTitle