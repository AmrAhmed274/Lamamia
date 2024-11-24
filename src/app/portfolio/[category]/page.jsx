import Image from "next/image";
import Button from "@/components/button/Button";
import styles from "./page.module.css";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (category) => {
    const data = items[category];

    if (data) {
        return data;
    }

    return notFound();
};

const Category = ({ params }) => {
    const data = getData(params.category);

    return (
        <div className={styles.container}>
            <h3 className={styles.paramsTitle}>{params.category}</h3>

            {data.map((item) => (
                <div className={styles.item} key={item.id}>
                    <div className={styles.content}>
                        <h4 className={styles.title}>{item.title}</h4>
                        <p className={styles.desc}>{item.desc}</p>
                        <Button text="See More" url="#" />
                    </div>

                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.img}
                            fill="true"
                            src={item.image}
                            alt=""
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Category;
