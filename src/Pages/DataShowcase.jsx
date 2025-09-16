import BreadCumb from "../Components/Common/BreadCumb";

const DataShowcase = () => {
    return (
        <div>
            <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Données et Statistiques"
                Content="Découvrez les statistiques et données <br> sur l'ennéagramme et nos formations"
            />
            <div className="data-showcase-section space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="data-showcase-content">
                                <h2>Données et Statistiques</h2>
                                <p>Cette section présenterait des données sur l'efficacité de nos formations et l'impact de l'ennéagramme sur le développement personnel.</p>
                                <div className="coming-soon-notice">
                                    <p><strong>Cette section est en cours de développement.</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataShowcase;
