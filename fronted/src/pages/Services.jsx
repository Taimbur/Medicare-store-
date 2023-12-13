import { services } from "../assets/data/services";
import ServicesCard from "../components/servicesCard";

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {services.map((item, index) => (
            <ServicesCard items={item} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
