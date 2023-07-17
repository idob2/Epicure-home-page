import './ChefCard.scss';
const ChefCard = (props: {
  chef: { chefImag: string; chefDescription: string };
}) => {
  return (
    <div className="chef-card-div">
      <img
        className="chef-img"
        src={props.chef.chefImag}
        alt={props.chef.chefDescription}
      />
      <div className="chef-description-div">
        <p className="spacing-1-25">{props.chef.chefDescription}</p>
      </div>
    </div>
  );
};

export default ChefCard;
