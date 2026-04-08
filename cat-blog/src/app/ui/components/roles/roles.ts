import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.html',
  styleUrl: './roles.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Roles {
  public roles = [
    {
      name: 'Райан Гослинг',
      desc: 'Актер без которого невозможна ни одна история',
      href: 'https://avatars.mds.yandex.net/get-yapic/27232/YBpUpPP2hkMPho6cem5K5WhQ-1/orig',
    },
    {
      name: 'Макс Вальтер',
      desc: 'Автор и создатель данного шедевра',
      href: 'https://avatars.mds.yandex.net/i?id=308400ff3fc0a175f623fe0e5de8313900e2b5f7-4462454-images-thumbs&n=13',
    },
    {
      name: 'Анна Финоженко',
      desc: 'Человек, подаривший образ главной героине Анне',
      href: 'https://i.pinimg.com/736x/92/d6/0f/92d60fe15e7aa02cfa40a8d83c34d4b4.jpg',
    },
  ];
}
