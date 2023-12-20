const ContactCard = ({ name, image }) => {
    return (
        <div className="contact flex  gap-4 items-center transform duration-100 hover:bg-gray-200 py-2 px-3 rounded-md">
            <img className="h-10 w-10 rounded-full relative" src={image} alt="user-image" />
            <div className="active-status border-[4px] border-white bg-green-600 w-4 h-4 rounded-full absolute bottom-[6px] left-[43px]"></div>
            <h2 className="text-black text-[16px]">{name}</h2>
        </div>
    );
};

export default ContactCard;
