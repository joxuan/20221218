const { createApp } = Vue

createApp({
    data() {
        return {
            storageKey: 'todo',
            itemValue: '',
            items: [],
        }
    },
    methods: {
        addItem() {
            if (!this.valid()) {
                this.reset();
                return;
            }

            // 新增資料
            this.items.push({
                status: 'pending',
                value: this.itemValue
            })

            this.reset();
            this.save();
        },
        getName() {
            return this.itemValue;
        },
        valid() {
            return (this.itemValue);
        },
        reset() {
            let itemName = this.$refs.itemName;
            if (itemName) {
                this.itemValue = '';
                itemName.focus();
            }
        },
        changeStatus(index) {
            let item = this.items[index];
            if (!item) {
                return;
            }
            let status = this.items[index].status == 'pending' ? 'done' : 'pending';
            this.items[index].status = status;
            this.save();
            console.table(this.items);
        },
        removeItem(index) {
            this.items.splice(index, 1);
            this.save();
        },
        restore() {
            try {
                let todo = localStorage.getItem(this.storageKey);
                if (!todo) {
                    todo = [];
                } else {
                    todo = JSON.parse(todo);
                }
                this.items = todo;
            } catch (e) {
                this.items = [];
            }
        },
        save() {
            let data = JSON.stringify(this.items);
            localStorage.setItem(this.storageKey, data);
        }
    },
    mounted() {
        this.restore();
    }
}).mount('#app')