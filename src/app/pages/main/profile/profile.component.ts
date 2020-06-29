import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IState, GetIsLoading, GetUserInfo } from 'src/app/state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { UserInfo } from 'src/app/shared/models/entities/userInfo.class';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public isLoading$: Observable<boolean> = this.store.pipe(
    select(GetIsLoading)
  );

  public userInfo$: Observable<UserInfo> = this.store.pipe(select(GetUserInfo));

  public form: FormGroup = this.formBuilder.group({
    login: ['', [Validators.required, Validators.minLength(3)]],
    //TODO:email, password change
  });

  constructor(
    private store: Store<IState>,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userInfo$.subscribe((userInfo: UserInfo) =>
      this.form.patchValue(userInfo)
    );
  }

  public updateUserInfo(event) {
    event.preventDefault();
    this.userService.updateInfo(this.form.value).subscribe();
  }

  public updateAvatar(event) {
    const file: File = event.target.files[0];
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () =>
      this.userService
        .updateInfo({ avatar: fileReader.result.toString() })
        .subscribe();
  }
}
