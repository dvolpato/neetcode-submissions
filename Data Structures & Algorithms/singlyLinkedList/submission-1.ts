class ListNode {
    value: number;
    next: ListNode;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode;
    size: number;
    constructor() {
        this.head = null;
        this.size = 0;
    }

    private getNode(index: number): ListNode {
        if (index >= this.size) {
            return null;
        }

        let node = this.head;
        for (let i = 0; i < index; ++i) node = node.next;
        return node;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        const node = this.getNode(index);
        if (!node) {
            return -1;
        }
        return node.value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        if (this.head == null) {
            this.insertHead(val);
            return;
        }

        let tail = this.head;
        while (tail.next != null) {
            tail = tail.next;
        }
        tail.next = new ListNode(val);
        this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (!this.head) {
            return false;
        }
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        const previous = this.getNode(index - 1);
        if (!previous) {
            return false;
        }
        const chosen = previous.next;
        if (!chosen) {
            return false;
        }
        previous.next = chosen.next;
        this.size--;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const values: number[] = [];
        let tail = this.head;
        while (tail != null) {
            values.push(tail.value);
            tail = tail.next;
        }
        return values;
    }
}
