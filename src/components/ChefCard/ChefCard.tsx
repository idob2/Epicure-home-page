import './ChefCard.scss';
const ChefCard = (props: {
  chef: { image: string; description: string };
}) => {
  return (
    <div className="chef-card-div">
      <img
        className="chef-img"
        src={props.chef.image}
        alt={props.chef.description}
      />
      <div className="chef-description-div">
        <p className="spacing-1-25">{props.chef.description}</p>
      </div>
    </div>
  );
};

export default ChefCard;
