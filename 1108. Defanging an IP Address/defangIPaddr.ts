function defangIPaddr(address: string): string {
    return address.replace(/\./g,"[.]");
}

// Time Complexity : O(1)
// Space Complexity : O(1)