//made by chatgpt


(() => {
    let isDragging = false;
    let offsetX, offsetY;

    const showModal = () => {
        const container = document.createElement('div');
        container.className = 'container';
        container.style.position = 'fixed';
        container.style.top = '20px';
        container.style.left = '20px';
        container.style.width = '25%';
        container.style.height = '50%';
        container.style.backgroundColor = 'skyblue';
        container.style.display = 'grid';
        container.style.gridTemplateRows = 'auto 1fr auto';
        container.style.gridTemplateColumns = 'repeat(2, 1fr)';
        container.style.alignItems = 'center';
        container.style.justifyItems = 'center';
        container.style.border = '2px solid #333';
        container.style.borderRadius = '8px';
        container.style.zIndex = '9999';
        container.style.userSelect = 'none'; // Disable text selection

        const title = document.createElement('div');
        title.textContent = 'WTF! CHEATS';
        title.style.fontFamily = 'Comic Sans MS, cursive';
        title.style.fontSize = '24px';
        title.style.color = 'white';
        title.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
        title.style.gridRow = '1';
        title.style.gridColumn = '1 / span 2';
        title.style.textAlign = 'center';
        title.style.paddingTop = '10px';
        title.style.cursor = 'move'; // Make title draggable

        const content = document.createElement('div');
        content.className = 'content';
        content.style.gridRow = '2';
        content.style.gridColumn = '1 / span 2';
        content.style.display = 'grid';
        content.style.gridTemplateRows = 'repeat(3, 1fr)';
        content.style.gridTemplateColumns = 'repeat(2, 1fr)';
        content.style.textAlign = 'center';
        content.style.padding = '20px';

        const cryptoInput = document.createElement('input');
        cryptoInput.type = 'number';
        cryptoInput.placeholder = 'How much cryptocurrency do you want?';
        cryptoInput.style.marginBottom = '10px';
        cryptoInput.style.width = '100%';
        cryptoInput.style.padding = '8px';
        cryptoInput.style.fontSize = '16px';
        cryptoInput.style.gridColumn = '1 / span 2';

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.style.padding = '10px 20px';
        submitButton.style.fontSize = '16px';
        submitButton.style.cursor = 'pointer';
        submitButton.style.gridColumn = '1 / span 2';

        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.style.padding = '20px 40px';
        closeButton.style.fontSize = '24px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.gridColumn = '1 / span 2';
        closeButton.style.gridRow = '3';
        closeButton.style.justifySelf = 'center'; // Center the X button horizontally

        container.appendChild(title);
        container.appendChild(content);
        content.appendChild(cryptoInput);
        content.appendChild(submitButton);
        container.appendChild(closeButton);

        document.body.appendChild(container);

        // Function to handle dragging of the modal
        function handleDragStart(e) {
            if (!isDraggableElement(e.target)) return; // Check if the element is draggable
            isDragging = true;
            offsetX = e.clientX - container.getBoundingClientRect().left;
            offsetY = e.clientY - container.getBoundingClientRect().top;
        }

        function handleDrag(e) {
            if (!isDragging) return;
            container.style.left = e.clientX - offsetX + 'px';
            container.style.top = e.clientY - offsetY + 'px';
        }

        function handleDragEnd() {
            isDragging = false;
        }

        // Attach event listeners for dragging
        container.addEventListener('mousedown', handleDragStart);
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', handleDragEnd);

        // Prevent input field from triggering drag events
        cryptoInput.addEventListener('mousedown', (e) => {
            e.stopPropagation();
        });

        // Prevent submit button from triggering drag events
        submitButton.addEventListener('mousedown', (e) => {
            e.stopPropagation();
        });

        // Function to check if element is draggable
        function isDraggableElement(target) {
            return target === title || target === container;
        }

        // Function to close the modal
        function closeModal() {
            document.body.removeChild(container);
        }

        // Connect close button to close modal function
        closeButton.addEventListener('click', closeModal);

        // Function to set cryptocurrency amount
        async function setCrypto(amount) {
            let iframe = document.querySelector("iframe");
            /* By CryptoDude3 */
            if (window.fetch.call.toString() == 'function call() { [native code] }') {
                const call = window.fetch.call;
                window.fetch.call = function () {
                    if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
                }
            }

            let i = document.createElement('iframe');
            document.body.append(i);
            window.prompt = i.contentWindow.prompt.bind(window);
            i.remove();
            let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
            stateNode.setState({ crypto: amount, crypto2: amount });
            stateNode.props.liveGameController.setVal({
                path: `c/${stateNode.props.client.name}/cr`,
                val: amount
            });
        }

        // Event listener for submit button
        submitButton.addEventListener('click', () => {
            let amount = parseInt(cryptoInput.value) || 0;
            setCrypto(amount);
        });
    };

    showModal();
})();
