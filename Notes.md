
Results for the tinyArray :

insert 1.109978 ms  append 2.422 μs

Results for the smallArray:
insert 42.924 μs     append 3.282 μs

Results for the mediumArray:
insert 954.662 μs    append 992.199 μs

Results for the largeArray:
insert 5.441845 ms   append 364.757 μs

Results for the extraLargeArray:
insert 847.561218 ms append 4.746839 ms

I can see that the speed of append is greater than that of insert. Therefore, I consider the append function to be better because it is faster and more efficient.

I see the append function is faster, because it uses the push method. Push adds the element to the end. Because of this, only the new element needs a new index.

I see that insert function is slower, because it uses the unshift method. Unshift adds the element to the front of the array. Because of this, every element afterwards needs to update their index.





