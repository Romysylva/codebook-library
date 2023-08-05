
const NavBar = ({totalcounter}) => {
    return (
        <>
            <div className="prim__c nav">
                <h4 className="light__c">Navbar <span className="danger__c p-2">{totalcounter}</span></h4>
            </div>
        </>
    );
};

export default NavBar;