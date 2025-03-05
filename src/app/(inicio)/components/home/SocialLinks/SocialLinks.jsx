import { links } from "./consts";
import styles from "./styles.module.css";
import { Container } from "@/components";

export const SocialLinks = () => {
  return (
    <Container>
      <div className={`${styles.socialLinksWrapper} flexContainer`}>
        {links.map((link) => (
          <a href={link.link} target='_blank' key={link.id} className={`${styles.socialLink} borderRadius boxShadow`}>
            <img src={link.icon} />
            <span>{link.title}</span>
          </a>
        ))}
      </div>
    </Container>
  );
};
