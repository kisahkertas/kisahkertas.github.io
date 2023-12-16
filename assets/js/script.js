const navigasi = document.querySelector('.navigasi');
const user = document.querySelector('.user');
const cari = document.querySelector('.cari')
const verifikasi = document.querySelector('.container_verifikasi')
const kategoriMenu = document.querySelector('.bar_left')

const navigasiOnOff = () => {
    if(navigasi.classList.contains('navigasi_on')){
        navigasi.classList.remove('navigasi_on');
    }else{
        if(user.classList.contains('user_on')){
            user.classList.remove('user_on');
            if(cari.classList.contains('cari_on')){
                cari.classList.remove('cari_on');
                navigasi.classList.add('navigasi_on');        
            }else{
                navigasi.classList.add('navigasi_on');        
            };
        }else{
            if(cari.classList.contains('cari_on')){
                cari.classList.remove('cari_on');
                navigasi.classList.add('navigasi_on');        
            }else{
                navigasi.classList.add('navigasi_on');        
            };  
        };
    };
};
const userOnOff = () => {
    if(user.classList.contains('user_on')){
        user.classList.remove('user_on');
    }else{
        if(navigasi.classList.contains('navigasi_on')){
            navigasi.classList.remove('navigasi_on');
            if(cari.classList.contains('cari_on')){
                cari.classList.remove('cari_on');
                user.classList.add('user_on');       
            }else{
                user.classList.add('user_on');        
            };
        }else{
            if(cari.classList.contains('cari_on')){
                cari.classList.remove('cari_on');
                user.classList.add('user_on');       
            }else{
                user.classList.add('user_on');        
            };
        };
    };
};
const cariOnOff = () => {
    if(cari.classList.contains('cari_on')){
        cari.classList.remove('cari_on');
    }else{
        if(navigasi.classList.contains('navigasi_on')){
            navigasi.classList.remove('navigasi_on');
            if(user.classList.contains('user_on')){
                user.classList.remove('user_on');
                cari.classList.add('cari_on');
            }else{
                cari.classList.add('cari_on');
            };
        }else{
            if(user.classList.contains('user_on')){
                user.classList.remove('user_on');
                cari.classList.add('cari_on');
            }else{
                cari.classList.add('cari_on');
            };
        };
    };
};
const verifikasiOn = () => {
    verifikasi.classList.add('verifikasi_on')
}
const verifikasiOff = () => {
    verifikasi.classList.remove('verifikasi_on')
}
const kategoriMenuOnOf = () => {
    if(kategoriMenu.classList.contains('bar_left_on')){
        kategoriMenu.classList.remove('bar_left_on')
    }else{
        kategoriMenu.classList.add('bar_left_on')
    }
}