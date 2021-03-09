import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    
    const { level } = useContext(ChallengesContext);
    
    return( 
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/904086114402803716/G41E7Dry_400x400.jpg" alt="Victor Fonseca"/>
            <div>
                <strong>Victor Fonseca</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}</p>
            </div>
        </div>
    );
}