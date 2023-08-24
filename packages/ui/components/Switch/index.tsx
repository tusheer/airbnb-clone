'use client';

import styles from './Switch.module.scss';

const Switch = () => {
    return (
        <div className={styles.toggleSwitch}>
            <input type="checkbox" className={styles['toggleSwitch-checkbox']} name="toggleSwitch" id="toggleSwitch" />
            <label className={styles['toggleSwitch-label']} htmlFor="toggleSwitch">
                <span className={styles['toggleSwitch-inner']}></span>
                <span className={styles['toggleSwitch-switch']}></span>
            </label>
        </div>
    );
};

export default Switch;
