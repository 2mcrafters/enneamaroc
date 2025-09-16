import { ProfileHeader, ProfileTabs } from "../Components/Profile";
import BreadCumb from "../Components/Common/BreadCumb";

const Profile = () => {
    return (
        <div>
            <BreadCumb
                bg="/assets/images/bg-img/breadcrumb.jpg"
                Title="Mon Profil"
                Content="Gérez votre profil et vos informations <br> personnelles"
            />
            <div className="profile-section space">
                <div className="container">
                    <ProfileHeader />
                    <ProfileTabs />
                </div>
            </div>
        </div>
    );
};

export default Profile;
