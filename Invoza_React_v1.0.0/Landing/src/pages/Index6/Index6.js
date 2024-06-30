import React, { Component } from 'react';

import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from './section';
import Service from "../../components/Service/service";
import Features from "../../components/Features/feature";
import Clients from '../../components/Client/client';
import Pricing from "../../components/Pricing/pricing";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/footer";

class Index6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [
                { id: 1, idnm: "home", navheading: "Home" },
                { id: 2, idnm: "services", navheading: "Services" },
                { id: 3, idnm: "features", navheading: "Features" },
                { id: 4, idnm: "clients", navheading: "Clients" },
                { id: 6, idnm: "pricing", navheading: "Plans" }
            ],
            pos: document.documentElement.scrollTop,
            imglight: true,
            navClass: "navbar-light"
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > this.state.pos) {
            this.setState({ navClass: "navbar-light nav-sticky", imglight: false });
        }
        else {
            this.setState({ navClass: "navbar-light", imglight: true });
        }
    };

    render() {
        return (
            <React.Fragment>

                {/* Importing Navbar */}
                <NavbarPage navItems={this.state.navItems} navClass={this.state.navClass} imglight={this.state.imglight} />

                {/* Importing section */}
                <Section />

                {/* Importing Service */}
                <Service />

                {/* Importing Features */}
                <Features />

                {/* Importing Clients */}
                <Clients />

                {/* Importing Pricing */}
                <Pricing />

                {/* Importing Sunscribe */}
                <Subscribe />

                {/* Importing Footer */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index6;