---
title: 'Lỗi máy tính khẩn cấp'
date: 2019-05-11T22:10:00Z
location:
  locality: Thành phố Thái Bình
  country-name: Việt Nam
canonical:
  source: tiepz
  edition: 2019
summary: máy tính dell gặp lỗi bất thường
image: /images/2019/05/error_pxe.jpg
tags:
- máy tính
- error
- featured
---

Nếu như bạn bị lỗi sau khi khởi động máy Dell hoặc lỗi tương tự trên dòng máy khác.

> PXE-E61: Media test failure, check cable
> 
> PXE-M0F: Exiting PXE ROM.
> No Boot Device Found. Press any key to reboot the machine

lỗi PXE-E61 liên quan đến Preboot eXecution Environment (PXE) được hỗ trợ trên bo mạch chủ Dell.

PXE là chế độ khởi động đặc biệt cho phép máy tính tìm kiếm và tải một hệ điều hành có khả năng khởi động qua mạng thay vì từ ổ đĩa cứng trong máy.

Thường là do chúng ta khôi phục default settings trong BIOS của máy dell dẫn đến PXE được kích hoạt trở lại.

có liên quan **nhất** đến PXE khi được enable lên là:

> PXE-E61: Media test failure, check cable
> PXE-M0F: Exiting Intel PXE ROM
> PXE-M0F: Exiting Intel Boot Agent
> No Boot Device Found. Press any key to reboot the machine

## Hướng dẫn khắc phục.

- Bấm F2 trước khi vào màn hình khởi động máy.
- Vô hiệu háo PXE thành **disable** trong Generator Configuration.

## Nếu bị lỗi tiếp theo

bị lỗi **Legacy** hoặc **UEFI**

do không vào được win. chuyển đổi qua lại giữa 2 thuộc tính trên trong BIOS để kích hoạt lại hệ điều hành được cài theo phương thức nào.