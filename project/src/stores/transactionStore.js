import { defineStore } from "pinia";
import axios from "axios";

export const useTransactionStore = defineStore("transactionStore", {
    state: () => ({
        transactions: [],
    }),
    actions: {
        async fetchTransactions() {
            try {
                const response = await axios.get("/path/to/db.json");
                this.transactions = response.data;
            } catch (error) {
                console.error("Failed to fetch transactions:", error);
            }
        },
    },
});
