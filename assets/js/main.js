class Dropdown {
    constructor({ buttonId, menuId, radioName, selectedId }) {
        this.button = document.getElementById(buttonId);
        this.menu = document.getElementById(menuId);
        this.radios = document.querySelectorAll(`input[name="${radioName}"]`);
        this.selectedText = document.getElementById(selectedId);

        if (!this.button) console.error(`Button not found: ${buttonId}`);
        if (!this.menu) console.error(`Menu not found: ${menuId}`);
        if (!this.selectedText) console.error(`Selected text not found: ${selectedId}`);
        if (this.radios.length === 0) console.error(`No radios found: ${radioName}`);

        this.init();
    }

    init() {
        this.button.addEventListener('click', () => this.toggle());
        this.radios.forEach(radio => {
            radio.addEventListener('change', () => this.updateSelection(radio));
        });

        document.addEventListener('click', (e) => this.handleOutsideClick(e));

    }

    toggle() {
        this.menu.hidden = !this.menu.hidden;
    }

    updateSelection(radio) {
        const labelText = radio.nextElementSibling?.textContent;
        this.selectedText.textContent = labelText;
        this.menu.hidden = true;
    }

    handleOutsideClick(event) {
        const isClickInside = this.button.contains(event.target) || this.menu.contains(event.target);
        if(!isClickInside)
            this.menu.hidden = true;
    }
}


document.addEventListener('DOMContentLoaded', async () => {
    
    new Dropdown({
        buttonId: 'difficultyButton', 
        menuId: 'controlDifficulty',
        radioName: 'difficulty',
        selectedId: 'selectedDifficulty'
    });
    new Dropdown({
        buttonId: 'modeButton', 
        menuId: 'controlMode',
        radioName: 'mode',
        selectedId: 'selectedMode'
    });

    const myData = await loadJson();
    const container = document.getElementById('passage-container');
    const selectedDifficulty = getSelectedDifficulty();
    const passage = getRandomPassage(myData, selectedDifficulty);
    container.textContent = passage.text;
});

function getSelectedDifficulty() {
    const difficulty = document.querySelector(`input[name='difficulty']:checked`);
    return difficulty ? difficulty.value : 'hard';
};

function getRandomPassage(passages, difficulty){
    const passageByDifficulty = passages[difficulty];
    const randomIndex = Math.floor(Math.random() * passageByDifficulty.length);
    return passageByDifficulty[randomIndex];
}

async function loadJson() {
    try {
        const response = await fetch('./assets/data.json');
        const data = await response.json();
        return data;
    } catch(error) {
        console.error('Error loading json: ', error);
    }
}


