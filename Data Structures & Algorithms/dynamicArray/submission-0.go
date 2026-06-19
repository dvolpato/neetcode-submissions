type DynamicArray struct {
    array []int
}

func NewDynamicArray(capacity int) *DynamicArray {
    // set length to 0,
    return &DynamicArray{ array: make([]int, 0, capacity)}
}

func (da *DynamicArray) Get(i int) int {
    return da.array[i]
}

func (da *DynamicArray) Set(i int, n int) {
    da.array[i] = n
}

func (da *DynamicArray) Pushback(n int) {
    da.array = append(da.array, n)
}

func (da *DynamicArray) Popback() int {
    elem := da.array[len(da.array) - 1]
    da.array = da.array[:len(da.array) - 1]
    return elem
}

func (da *DynamicArray) resize() {
    cap := cap(da.array)
    newArray := make([]int, 0, cap * 2)
    copy(newArray, da.array)
    da.array = newArray
}

func (da *DynamicArray) GetSize() int {
    return len(da.array)
}

func (da *DynamicArray) GetCapacity() int {
    return cap(da.array)
}
