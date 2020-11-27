import React from 'react';
import mailIcon from '../../../../images/mail.png';
import whatsappIcon from '../../../../images/whatsapp.png';
import githubIcon from '../../../../images/github.png';
import lkdIn from '../../../../images/linkendin.png';
import styles from './Contacts.module.css';
import fb from '../../../../images/fb.png';
import twitter from '../../../../images/twitter.jpg';

const Contacts = (
    // { name, bio, avatar }
    ) => {

  return (
      <div className={styles.wrap}>
        {/*<img src={avatar} alt='avatar' className={styles.avatar}/>*/}
        <div>
          {/*<h1 className={styles.name}>{name}</h1>*/}
          {/*<p className={styles.bio}>{bio}</p>*/}
          <div>
            <div className={styles.contacts}>
              <img src = {mailIcon} alt = 'mail' className = {styles.contactsIcon} />
              <a
                  href='mailto:>natalyamyunster@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className = {styles.link}>natalyamyunster@gmail.com</a>
            </div>
            <div className = {styles.contacts} >
              <img src = {whatsappIcon} alt = 'wa'  className = {styles.contactsIcon} />
              <a
                  href='https://wa.link/r4nyid'
                  target='_blank' rel='noopener noreferrer'
                  className = {styles.link}>+39 3807917546
              </a>
            </div>
          </div>
          <div className = {styles.socials}>
            <a
                href='https://github.com/Natalina27'
                target='_blank'
                rel='noopener noreferrer'>
              <img src={githubIcon} alt='github' className = {styles.socialsIcon} />
            </a>
            <a
                href='https://www.linkedin.com/in/natalya-myunster-3a171117/'
                target='_blank'
                rel='noopener noreferrer'>
              <img src={lkdIn} alt='linkendin' className = {styles.socialsIcon} />
            </a>
            <a
                href='https://twitter.com/MyunsterNatalya'
                target='_blank'
                rel='noopener noreferrer'>
              <img src={twitter} alt='twitter' className = {styles.socialsIcon} />
            </a>
            <a
                href='https://www.facebook.com/natalyamyunster'
                target='_blank'
                rel='noopener noreferrer'>
              <img src={fb} alt='facebook' className = {styles.socialsIcon} />
            </a>
          </div>
        </div>
      </div>
  );
};

export default Contacts;
