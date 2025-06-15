-- CreateTable
CREATE TABLE `SISWA` (
    `nis` VARCHAR(255) NOT NULL,
    `nm_siswa` VARCHAR(191) NOT NULL,
    `tmp_lahir` VARCHAR(191) NULL,
    `tgl_lahir` DATE NULL,
    `jkel` VARCHAR(1) NULL,
    `alamat` VARCHAR(191) NULL,
    `telp` VARCHAR(191) NULL,
    `nm_wali` VARCHAR(191) NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `kd_kelas` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SISWA_username_key`(`username`),
    PRIMARY KEY (`nis`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GURU` (
    `nip` VARCHAR(255) NOT NULL,
    `nm_guru` VARCHAR(191) NOT NULL,
    `tmp_lahir_guru` VARCHAR(191) NULL,
    `tgl_lahir_guru` DATE NULL,
    `kel_guru` VARCHAR(1) NULL,
    `alamat` VARCHAR(191) NULL,
    `telp` VARCHAR(191) NULL,
    `kd_matpel` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`nip`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KELAS` (
    `kd_kelas` VARCHAR(255) NOT NULL,
    `nm_kelas` VARCHAR(191) NOT NULL,
    `jml_siswa` INTEGER NULL,
    `thn_ajaran` VARCHAR(191) NULL,
    `nip` VARCHAR(191) NULL,

    PRIMARY KEY (`kd_kelas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MATPEL` (
    `kd_matpel` VARCHAR(255) NOT NULL,
    `nm_matpel` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`kd_matpel`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NILAI` (
    `kd_nilai` VARCHAR(255) NOT NULL,
    `uts_sem_ganjil` DOUBLE NULL,
    `uas_sem_ganjil` DOUBLE NULL,
    `uts_sem_genap` DOUBLE NULL,
    `uas_sem_genap` DOUBLE NULL,
    `nis` VARCHAR(191) NOT NULL,
    `kd_matpel` VARCHAR(191) NOT NULL,
    `nip` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`kd_nilai`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ABSEN` (
    `kd_absen` VARCHAR(255) NOT NULL,
    `nm_bulan` VARCHAR(191) NULL,
    `jml_hadir` INTEGER NULL,
    `alfa` INTEGER NULL,
    `izin` INTEGER NULL,
    `sakit` INTEGER NULL,
    `nis` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`kd_absen`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ADMIN` (
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NULL,

    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SISWA` ADD CONSTRAINT `SISWA_kd_kelas_fkey` FOREIGN KEY (`kd_kelas`) REFERENCES `KELAS`(`kd_kelas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GURU` ADD CONSTRAINT `GURU_kd_matpel_fkey` FOREIGN KEY (`kd_matpel`) REFERENCES `MATPEL`(`kd_matpel`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `KELAS` ADD CONSTRAINT `KELAS_nip_fkey` FOREIGN KEY (`nip`) REFERENCES `GURU`(`nip`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NILAI` ADD CONSTRAINT `NILAI_nis_fkey` FOREIGN KEY (`nis`) REFERENCES `SISWA`(`nis`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NILAI` ADD CONSTRAINT `NILAI_kd_matpel_fkey` FOREIGN KEY (`kd_matpel`) REFERENCES `MATPEL`(`kd_matpel`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NILAI` ADD CONSTRAINT `NILAI_nip_fkey` FOREIGN KEY (`nip`) REFERENCES `GURU`(`nip`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ABSEN` ADD CONSTRAINT `ABSEN_nis_fkey` FOREIGN KEY (`nis`) REFERENCES `SISWA`(`nis`) ON DELETE RESTRICT ON UPDATE CASCADE;
