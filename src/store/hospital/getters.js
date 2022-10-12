

export const getItemsByTerm =  ( state ) => (term = '')=> {
   if(term.length === 0) return state.entries;
   return state.items.filter(item => item.text.toLowerCase().includes(term));
}

export const getItemsById =  ( state ) => (id = '') => {
   return state.items.filter(item => item.id === id);
}

