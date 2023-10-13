import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import {CandidatoService} from "../../shared/services/candidato.service";


@Component({
  selector: 'app-produtos-add',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']

})
export class CandidatoComponent implements OnInit {

  maskCPF: string = '000.000.000-00';


  formGroup!: FormGroup;

  facePhoto?: any;
  imagenMin?: any;

  idDocFront?: any;
  imagenMin1?: any;

  idDocBack?: any;
  imagenMin2?: any;

  adressDocFront?: any;
  imagenMin3?: any;

  adressDocBack?: any;
  imagenMin4?: any;

  nomeImagem!: string;
  idImagem!: string;
  urlImagem!: string;


  @ViewChild('imageInputFile') imagenFile!: ElementRef;

  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private service: CandidatoService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  openSnackBar() {
    this.snackBar.open('Operação concluída com sucesso', 'Fechar', {
      duration: 5000, // duração em milissegundos
      panelClass: ['mat-toolbar', 'mat-primary'] // classes CSS adicionais
    });
  }


  saveCandidato() {
    const formData = new FormData();
    formData.append('facePhoto', this.facePhoto);
    formData.append('idDocumentFront', this.idDocFront);
    formData.append('idDocumentBack', this.idDocBack);
    formData.append('addressDocumentFront', this.adressDocFront);
    formData.append('addressDocumentBack', this.adressDocBack);

    formData.append('name', this.formGroup.controls['name'].value);
    formData.append('birthDate', this.formGroup.controls['birthDate'].value);
    formData.append('cpf', this.formGroup.controls['cpf'].value);
    formData.append('motherName', this.formGroup.controls['motherName'].value);
this.service.salvar(formData).subscribe(()=>{})


console.log('Chegou aqui: ', formData)
  }

  // upload() {
  //   this.produtoService.upload(this.imagen).subscribe((data) => {
  //     console.log(data);
  //     this.idImagem = data.public_id;
  //     this.nomeImagem = data.original_filename;
  //     this.urlImagem = data.url;
  //     this.saveProduct();
  //   },
  //     (error) => {
  //       this.dialog.open(ModalErrorComponent, {
  //         width: '400px', // largura da modal
  //         data: {
  //           cpfOrCnpj: error.message
  //           /* dados a serem passados para a modal */
  //         }
  //       });
  //       this.resetArquivo();
  //     })
  // }

  onFileSelected(event: any) {
    this.facePhoto = event.target.files[0];
    // Faça algo com o arquivo selecionado

    console.log(this.facePhoto);
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    }
    fr.readAsDataURL(this.facePhoto);
  }

  onFileSelected1(event: any) {
    this.idDocFront = event.target.files[0];
    // Faça algo com o arquivo selecionado
    console.log(this.idDocFront);
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin1 = evento.target.result;
    }
    fr.readAsDataURL(this.idDocFront);
  }

  onFileSelected2(event: any) {
    this.idDocBack = event.target.files[0];
    // Faça algo com o arquivo selecionado
    console.log(this.idDocBack);
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin2 = evento.target.result;
    }
    fr.readAsDataURL(this.idDocBack);
  }

  onFileSelected3(event: any) {
    this.adressDocFront = event.target.files[0];
    // Faça algo com o arquivo selecionado
    console.log(this.adressDocFront);
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin3 = evento.target.result;
    }
    fr.readAsDataURL(this.adressDocFront);
  }

  onFileSelected4(event: any) {
    this.adressDocBack = event.target.files[0];
    // Faça algo com o arquivo selecionado
    console.log(this.adressDocBack);
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin4 = evento.target.result;
    }
    fr.readAsDataURL(this.adressDocBack);
  }

  resetArquivo() {
    this.facePhoto = null;
    this.imagenMin  = null;
    this.idDocFront = null;
    this.imagenMin1 = null;
    this.idDocBack = null;
    this.imagenMin2 = null;
    this.adressDocFront = null;
    this.imagenMin3 = null;
    this.adressDocBack = null;
    this.imagenMin4 = null;
    this.formGroup.controls['facePhoto'].reset();
    this.formGroup.controls['idDocFront'].reset();
    this.formGroup.controls['idDocBack'].reset();
    this.imagenFile.nativeElement.value = '';
  }


  createForm() {
    this.formGroup = this.formBuilder.group({
      codCandidato: [{ value: '', disabled: true }],
      name: [''],
      birthDate: [0],
      cpf: [''],
      motherName: [''],
      facePhoto: [''],
      idDocFront: [''],
      idDocBack: [''],
      adressDocFront: [''],
      adressDocBack: ['']
    });

  }

  limpaFormulario() {
    this.formGroup.reset();
    this.resetArquivo();
  }


  backNavigationHandler() {
    document.querySelector('body')?.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.router.navigate(['produtos']);
  }

  navigateToActuations() {
    document.querySelector('body')?.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.router.navigate(['produtos']);
  }

}
