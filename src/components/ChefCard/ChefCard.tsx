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
      <p className="chef-description">{props.chef.chefDescription}</p>
    </div>
  );
};

export default ChefCard;
