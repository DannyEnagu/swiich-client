import styles from './General.module.css';

export default function General() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.sections}>
        <h2>
          <span>Preference</span>
        </h2>
        <div className={styles.sectionContent}>
          <div className={styles.setting}>
            <div className={styles.settingOption}>
              <h5>
                Start program when I start windows
              </h5>
              <div className={styles.toggleSwitch}>
                <input type="checkbox" id="toggleSwitch" />
                <label className={styles.switch} htmlFor="toggleSwitch">
                  <span className={styles.switchSlider}></span>
                </label>
              </div>
            </div>
            <p>
              This makes the chat application to start automatically when you turn on your PC
            </p>
          </div>
          <div className={styles.setting}>
            <div className={styles.settingOption}>
              <h5>
                Start a call when i double click on a friend 
              </h5>
              <div className={styles.toggleSwitch}>
                <input type="checkbox" id="toggleSwitch" checked />
                <label className={styles.switch} htmlFor="toggleSwitch">
                  <span className={styles.switchSlider}></span>
                </label>
              </div>
            </div>
            <p>
              You can call a friend by double clicking on it avatar or name
            </p>
          </div>
          <div className={styles.setting}>
            <div className={styles.settingOption}>
              <h5>
                Confirm drag and drop uploads
              </h5>
              <div className={styles.toggleSwitch}>
                <input type="checkbox" id="toggleSwitch" />
                <label className={styles.switch} htmlFor="toggleSwitch">
                  <span className={styles.switchSlider}></span>
                </label>
              </div>
            </div>
            <p>
              Add a pop-up message to confirm before uploading files using drag and drop
            </p>
          </div>
          <div className={styles.setting}>
            <div className={styles.settingOption}>
              <h5>
                Sign me in automatically
              </h5>
              <div className={styles.toggleSwitch}>
                <input type="checkbox" id="toggleSwitch" />
                <label className={styles.switch} htmlFor="toggleSwitch">
                  <span className={styles.switchSlider}></span>
                </label>
              </div>
            </div>
            <p>
              Enabling this let you sign-in automatically when the program starts 
            </p>
          </div>
          <div className={styles.setting}>
            <div className={styles.settingOption}>
              <h5>
                Language
              </h5>
            </div>
            <p>
              Select your preferred language
            </p>
            <div className={`${styles.langSelect} my-sm`}>
              <select>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sections}>
        <h2>
          <span>Appearance</span>
        </h2>
        <div className={styles.sectionContent}>
          <div className={styles.setting}>
            <div className={styles.settingOption}>
              <h5>
                Theme
              </h5>
            </div>
            <p>
              Select your preferred theme
            </p>
            <div className={`row align-center my-sm`}>
              <button className={`btn ${styles.themeOption} ${styles.themeOptionLight}`}>
                Light
              </button>
              <button className={`btn ${styles.themeOption} ${styles.themeOptionDark}`}>
                Dark
              </button>
            </div>
          </div>
          <div className={styles.setting}>
            <div className={styles.settingOption}>
              <h5>
                Hide people who are offline
              </h5>
              <div className={styles.toggleSwitch}>
                <input type="checkbox" id="toggleSwitch" checked />
                <label className={styles.switch} htmlFor="toggleSwitch">
                  <span className={styles.switchSlider}></span>
                </label>
              </div>
            </div>
            <p>
              Do not show people who are offline in the chat list
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}