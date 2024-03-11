function cutAndReverse(input) {
    let middleIdx = input.length / 2;
    let left = input.slice(0, middleIdx).split(``).reverse().join(``);
    let right = input.slice(middleIdx).split(``).reverse().join(``);


    console.log(left);
    console.log(right);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
//cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');